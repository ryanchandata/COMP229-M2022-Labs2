import express from 'express';

// import the Business Model
import Business from '../Models/business';

import { UserDisplayName  } from '../Util';

export function DisplayBusinessListPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  Business.find(function(err, businessCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Business Contact List', page: 'business-list', business: businessCollection, displayName:  UserDisplayName(req)  });
    });
}


export function DisplayBusinessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  let id = req.params.id;

  Business.findById(id, {}, {}, (err, contactItemToEdit) => {
      if (err) {
          console.error(err);
          res.end(err);
      };

      console.log(contactItemToEdit);
      res.render('index', { title: "Contact Edit", page: "business-list-edit", business: contactItemToEdit, displayName: UserDisplayName(req) })
  })
}


export function DeleteContact(req: express.Request, res: express.Response, next: express.NextFunction): void{
  let id = req.params.id;

  //update contact by id
  Business.deleteOne({_id: id}, (err) => {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }

      res.redirect('/business-list');
  })
}