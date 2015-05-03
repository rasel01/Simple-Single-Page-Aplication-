using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using jobInfo.Models;

namespace jobInfo.Manager
{
    public class PeopleManager
    {

        // list of data

        public List<peopleInfo> GetAll()
        {
            using (var db = new peopleEntities())
            {
                return db.peopleInfoes.ToList();
            }
        }


        // add or insert a data
        public bool Save(peopleInfo peo)
        {
            using(var db = new peopleEntities())
            {
                db.peopleInfoes.Add(peo);
                db.SaveChanges();
                return true;
            }
            
        }


        // pick a data 
        public peopleInfo GetPeopleInfo(int id)
        {
            using (var db = new peopleEntities())
            {
                return db.peopleInfoes.SingleOrDefault(x => x.Id == id);
            }
            
        }

        //  delete a data
        public bool Delete(int id)
        {
            using (var db = new peopleEntities())
            {
                var itemToRemove = db.peopleInfoes.SingleOrDefault(x => x.Id == id);
                if (itemToRemove != null)
                {
                    db.peopleInfoes.Remove(itemToRemove);
                    db.SaveChanges();
                }
                return true;
            }
        }

        // update a data
        public bool Update(int id , peopleInfo peo)
        {
            using (var db = new peopleEntities())
            {
                if (id != peo.Id)
                {
                    return false;
                }
                db.Entry(peo).State = EntityState.Modified;
                try
                {
                    db.SaveChanges();
                }
                catch
                {
                    return false;
                    
                }
                return true;
            }
        }




    }
}