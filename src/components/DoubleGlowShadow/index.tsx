import { isMobile } from 'react-device-detect'
import { FC } from 'react'
import { classNames } from '../../functions'

const DoubleGlowShadow: FC<{ className?: string; children: any }> = ({ children, className }) => {
  if (isMobile) {
    return <div className="shadow-swap">{children}</div>
  }

  return (
    <div className={classNames(className, 'relative w-full max-w-2xl')}>
      <div className="absolute top-1/3 -left-10 bg-pink bottom-4 w-3/5 rounded-full z-0 filter blur-[250px]" />
      <div className="absolute bottom-1/3 -right-10 bg-yellow top-4 w-3/5 rounded-full z-0  filter blur-[250px]" />
      <div className="relative filter drop-shadow">{children}</div>
    </div>
  )
}

export default DoubleGlowShadow
