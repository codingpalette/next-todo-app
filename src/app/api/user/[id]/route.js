import {NextResponse} from "next/server";

// 아이디 넘버로 조회
export async function GET(req, { params }) {
  const id = params.id;
  console.log('id', id)

  const result = {
    status: 200,
    data: {
      id: 1,
      name: 'John Doe',
      email: 'sdf'
    }
  }

  return NextResponse.json(result)
}
