import { Pipe, PipeTransform } from '@angular/core';
import { format, parseISO, addMinutes } from 'date-fns';

@Pipe({
  name: 'dateFormat',
  standalone: true, // Angular 18+ best practice
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string, pretext?: string): string {
    if (!value) return '';

    // Handle runtime format (convert minutes → "X h Y m")
    if (pretext === 'runtime') {
      const totalMinutes = parseInt(value, 10);
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours} h ${minutes} m`;
    }

    // Handle normal date formatting
    try {
      const date = parseISO(value);
      return format(date, pretext || 'PP'); // 'PP' = localized long date (same as moment's 'LL')
    } catch (err) {
      console.error('Invalid date format:', value);
      return value;
    }
  }
}