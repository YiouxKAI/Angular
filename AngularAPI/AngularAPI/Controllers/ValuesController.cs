using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularAPI.Models;

namespace AngularAPI.Controllers
{
    public class ValuesController : ApiController
    {
        AngularDBEntities db = new AngularDBEntities();
        // GET api/values
        public IEnumerable<ToDoList> Get()
        {
            //return new string[] { "value1", "value2" };
            return db.ToDoList;
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            var toDoList = db.ToDoList.Where(x => x.Id == id).FirstOrDefault();
            //var toDoList = db.ToDoList.Find(id);
            if (toDoList == null)
                return NotFound();

            return Ok(toDoList);
        }

        // POST api/values
        public IHttpActionResult Post(ToDoList toDoList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.ToDoList.Add(toDoList);
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                throw;
            }

            return CreatedAtRoute("DefaultApi", new { id = toDoList.Id }, toDoList);
        }

        // PUT api/values/5
        public IHttpActionResult Put(int id, ToDoList toDoList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Entry(toDoList).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return CreatedAtRoute("DefaultApi", new { id = toDoList.Id }, toDoList);
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id)
        {
            var toDoList= db.ToDoList.Find(id); 
            if (toDoList==null)
            {
                return NotFound();
            }

            db.ToDoList.Remove(toDoList);
            db.SaveChanges();

            return Ok(toDoList);
        }
    }
}
