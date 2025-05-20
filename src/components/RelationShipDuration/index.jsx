import React, { useState, useEffect } from 'react';

const RelationshipDuration = ({ startDate }) => {
  const [duration, setDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!startDate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const start = new Date(startDate);

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }

      if (minutes < 0) {
        minutes += 60;
        hours--;
      }

      if (hours < 0) {
        hours += 24;
        days--;
      }

      if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
      }

      if (months < 0) {
        months += 12;
        years--;
      }

      setDuration({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  if (!startDate) return <p>Start date not provided.</p>;

  const { years, months, days, hours, minutes, seconds } = duration;

  return (
    <p>
      {years} ano(s), {months} meses(s), {days} dias(s),<br />
      {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')} ⏳❤️
    </p>
  );
};

export default RelationshipDuration;
