### Google keep clone using NextJS 14

![1st-pic](/screenshots/pic1.png)
![2nd-pic](/screenshots/pic2.png)
![3rd-pic](/screenshots/pic3.png)


#### Features
- Authentication : 🔐 **Login** & 🔏 **Register** for creating a new user
- 📝 **Notes** - Create, Update, Delete notes
  * 🗒 **Simple Notes** - Update/delet text in a simple text mode
  * add **Tags** for notes - ( add / remove )
- server side and client side rendering
- single end point graph API implementation for efficient CRUD operations to avoid over-fetching compared to traditional
  REST architecture.
- nextJS api routes

#### Project Structure :
``` 
public
prisma
     |- schema.prisma
src
  |- app 
       |- api
            |-graphql 
                |- resolvers
                    |- notes
                    |- user
                |- typedefs
            |- auth
       |- components
       |- login
       |- register
       |- dashboard
  |- client
  |- hooks
  |- lib 
  |- utils

```

#### Frontned :
- React
- Apollo client
- tailwindCSS

#### Backend :
- NextJS API routes
- Apollo server
- GraphQL
- prisma
- PostgreSQL

Install all dependencies
```bash
yarn install
```

run the application
```bash
yarn dev
```
