using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Webapp_Angular.Controllers
{
    [RoutePrefix("api")]
    public class SampleAPIController : ApiController
    {

        [Route("SampleAPI/Test")]
        [HttpGet]
        public IEnumerable<string> GetTestData()
        {
            return new List<string>(){ "Test1" , "test2"};
        }
    }
}
