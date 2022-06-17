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