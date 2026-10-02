import { cn } from '@/lib/utils'
import whiteLogo from '@/assets/nextwallstreet-logo-white.png'

export function NextwallstreetMark({ className }: { className?: string }) {
  return (
    <img
      src={whiteLogo}
      alt="nextwallstreet.com logo"
      className={cn('brand-mark inline-block object-contain', className)}
    />
  )
}

export function NextwallstreetLogo({
  className,
  markClassName,
  wordmark = true,
}: {
  className?: string
  markClassName?: string
  wordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <NextwallstreetMark className={cn('h-8 w-8', markClassName)} />
      {wordmark && (
        <span className="text-[15px] font-semibold text-foreground">nextwallstreet.com</span>
      )}
    </span>
  )
}
