'use client'

import Image from 'next/image'
import {Button} from "@nextui-org/react";

import { useSelector, useDispatch } from 'react-redux'
import {login} from "@/app/redux/userStore";
import {useEffect} from "react";

export default function Home() {
  const dispatch = useDispatch()

  const userInfo = useSelector((state) => state.user.value)

  useEffect(() => {

  }, []);(() => {
    console.log('userInfo', userInfo)
  }, [userInfo]);


  const onClickEvent = () => {
    console.log('22222')
    dispatch(login({name: 'test'}))
  }


  return (
    <>
      <div>
        <Button onClick={onClickEvent} color="primary">
          Button
        </Button>
      </div>
      <div>
        {userInfo && <div>{userInfo.name}</div>}
      </div>
    </>
  )
}
