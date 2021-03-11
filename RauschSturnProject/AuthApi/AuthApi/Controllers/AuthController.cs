using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AuthApi.Models;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AuthApi.Controllers
{
    public class AuthController : ApiController
    {
        // GET: api/Auth
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Auth/5
        public string Get(int id)
        {
            return "value";
        }

        //POST: api/Auth
        //public void Post([FromBody] string value)
        //{
        //}

        // PUT: api/Auth/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Auth/5
        public void Delete(int id)
        {
        }


        public async Task<HttpResponseMessage> PostEmployeeData(AuthCode code)
        {
            
            var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", "1d177466f1f347f8a061e3b61dabf4e8");
            HttpResponseMessage response = await client.PostAsJsonAsync("https://rsieh-dev.azure-api.net/interview/verify-2fa", code);
            Console.WriteLine(response);
            var responseString = await response.Content.ReadAsStringAsync();
            
            var data = (JObject)JsonConvert.DeserializeObject(responseString);
            //string timeZone = data["errors"].Value<string>();

            if ((int)response.StatusCode == 200)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Success");
            }
            else if((int)response.StatusCode == 400)
            {
                var timeZone = data["errors"];
                var error = timeZone["Code"];
                return Request.CreateResponse(HttpStatusCode.BadRequest, error);
            }
            else if ((int)response.StatusCode == 401 || (int)response.StatusCode == 403)
            {
                return Request.CreateResponse(HttpStatusCode.Unauthorized, "The Ocp-Apim-Subscription-Key is invalid or missing");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, responseString);
            }

        }
    }
}
