import s from './s.module.css'
import { cn } from '../../../utils/tailwind'

export function Loader({ className, classNameLoader }: { className?: string, classNameLoader?: string }) {
  return (
    <div className={cn(className, 'relative flex min-h-screen items-center  justify-center')}>
      <div className={cn(classNameLoader, s.loader)}></div>
    </div>
  )
}
