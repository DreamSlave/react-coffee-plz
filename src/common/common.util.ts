const isChongmuMobileApp = (): boolean => {
  const userAgent = navigator.userAgent.toLowerCase();

  //test
  console.log(`userAgent: ${userAgent}`)

  return userAgent.includes('chongmutimeapp')
}

export default isChongmuMobileApp