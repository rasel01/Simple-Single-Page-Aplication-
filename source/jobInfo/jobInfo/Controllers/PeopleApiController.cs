using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using jobInfo.Manager;
using jobInfo.Models;

namespace jobInfo.Controllers
{
    public class PeopleApiController : ApiController
    {
        PeopleManager manager = new PeopleManager();
        // list of data

        // GET: api/PeopleAPI
        public List<peopleInfo> GetPeopleInfos()
        {
            return manager.GetAll();
        }

        // pick a data

        // Get : api/peopleApi/5
        [ResponseType(typeof (peopleInfo))]

        public peopleInfo GetPeopleInfo(int id)
        {
            return manager.GetPeopleInfo(id);
        }

        // update a data

        //Put: api/PeopleApi/5

         [ResponseType(typeof (void))]

        public bool PutPeopleInfo(int id , peopleInfo people)
        {
            try
            {
                manager.Update(id, people);
                return true;
            }
            catch
            {
                return false;
               
            }
        }

        // insert or add  a data

        //Post: api/PepleApi

        public IHttpActionResult PostPeopleInfo(peopleInfo people)
        {
            manager.Save(people);
            return CreatedAtRoute("DefaultApi", new { id = people.Id }, people);
        }


        // delete a data
        // Delete: api/PeopleApi/5
        public bool DeletePeopleInfo(int id)
        {
            try
            {
                manager.Delete(id);
                return true;
            }
            catch
            {

                return false;
            }
        }
    }
}
