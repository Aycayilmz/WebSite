using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebSite.Controllers
{
    public class BlogController : Controller
    {
        // GET: Blog
        public ActionResult Index()
        {
            ViewBag.Title="Blog";
            return View();
        }
        public ActionResult Category()
        {
            ViewBag.Title = "Category";
            return View();
        }
        public ActionResult Popular()
        {
            ViewBag.Title = "Popular";
            return View();
        }
        public ActionResult Tag()
        {
            ViewBag.Title = "Tag";
            return View();
        }
        public ActionResult Detail()
        {
            return View();
        }
    }
}