using Microsoft.AspNetCore.Mvc;

namespace inviteOnly.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
