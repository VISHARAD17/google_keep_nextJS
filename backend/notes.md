- run prisma migrations 
```bash
npx prisma migrate dev --name init
```

- generate prisma client ( need to run only once )
```bash
npx prima generate
```

- initialize prisma 
```bash
npx prisma init
```

- using @@map anotation, exact table name can be given

- generate secret key using the below command 
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
