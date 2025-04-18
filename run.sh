docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://neondb_owner:npg_nljVZ2iOtQ3I@ep-proud-water-a1165rvl-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require" \
  -e NEXTAUTH_SECRET="ZhORtuTqe4/B0imEefnXRgIikPJyyeW1qFgVq+Vv8qw=" \
  -e NEXTAUTH_URL="http://localhost:3000" \
  google-keep
