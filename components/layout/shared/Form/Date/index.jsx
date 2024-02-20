// Rsuite
import { DateRangePicker } from 'rsuite';

export default function Date() {
  return (
    <div className="form-parent-filter overflow-visible">
      {/* w-[400px], not for all scenarios; To fix height later! */}
      <DateRangePicker showOneCalendar className="w-full h-full relative z-[1]" size="lg" placeholder="--Choose Date--" />
      <label htmlFor="daterangepicker">Date of Accident</label>
    </div>
  )
}