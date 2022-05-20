import { useNavigate } from 'react-router-dom'

const HeaderTopLeft = () => {
  const navigate = useNavigate()
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
      <p
        onClick={() => navigate('daily')}
        className="pt-1 pb-1.5 hover:underline hover:cursor-pointer"
      >
        Daily Deals
      </p>
      <p className="pt-1 pb-1.5 hover:underline hover:cursor-pointer">
        Help & Contact
      </p>
    </div>
  )
}

export default HeaderTopLeft
