import s from './s.module.css'

export function Loader() {
  return (
    <div className="relative flex min-h-screen items-center  justify-center">
      <div className={s.loader}></div>
    </div>
  )
}
