
- migrate prisma cmd 
```bash
npx prisma migrate dev --name init
```


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
- userId
- tags[]


setp by step
- add authorization to display user information on dashboard 
- add 