using BlazorWebApp.Shared;
using Microsoft.AspNetCore.Mvc;

namespace BlazorWebApp.Host.Areas.API
{
    [Area("API")]
    [Route("api/test")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public TestResponse Index(TestRequest model)
        {
            return new TestResponse
            {
                WelcomeText = $"Hello, {model.Name}!"
            };
        }
    }
}
