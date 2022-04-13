const HeaderTopLeft = () => {
  return (
    <div className="flex text-xs space-x-5">
      <p className="pt-1 pb-1.5">
        Hi!{' '}
        <span className="underline text-blue-800 hover:cursor-pointer">
          Sign in
        </span>{' '}
        or{' '}
        <span className="underline text-blue-800 hover:cursor-pointer">
          register
        </span>
      </p>
      <p className="pt-1 pb-1.5 hover:underline hover:cursor-pointer">
        Daily Deals
      </p>
      <p className="pt-1 pb-1.5 hover:underline hover:cursor-pointer">
        Help & Contact
      </p>
    </div>
  )
}

export default HeaderTopLeft
