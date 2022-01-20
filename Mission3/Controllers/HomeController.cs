using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission3.Models;

namespace Mission3.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalc (CalculatorModel model)
        {
            return View();
        }
    }
}
