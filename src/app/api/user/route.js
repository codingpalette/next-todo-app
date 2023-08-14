import {NextRequest, NextResponse} from 'next/server';

export async function GET() {
  const result = {
    status: 200,
    data: [
      {
        id: 1,
        name: 'John Doe',
        email: 'sdf',
        password: 'sdf',
      },
    ]
  }

  return NextResponse.json(result)
}

export async function POST(req) {
  const body = await req.json()
  console.log('body', body)


  // const { name, message } = req.body

  return NextResponse.json({status: 200})
}

// 아이디 넘버로 조회
// export async function GET_id(req) {
//   const { id } = req.query
//   console.log('id', id)
//
//
//   const result = {
//     status: 200,
//     data: {
//       id: 1,
//       name: 'John Doe',
//       email: 'sdf',
//       password: 'sdf',
//     }
//   }
//
//   return NextResponse.json(result)
// }
