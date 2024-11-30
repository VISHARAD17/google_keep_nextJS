
- migrate prisma cmd 
```bash
npx prisma migrate dev --name init
```
- prisma studio
```bash
npx primsa studio
```


- schemas:

### User

- id
- name
- email
- password
- tags[]
- note[]

### notes

- id
- title
- content
- tag []
- userid (relation many to one)

### tag
- id
- name
- userId ( many to one)
- note [] ( many to many )
