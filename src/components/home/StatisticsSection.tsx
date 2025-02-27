
import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ value }: { value: number }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCurrentValue(value);
        clearInterval(timer);
      } else {
        setCurrentValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {typeof value === 'number' && value % 1 !== 0
        ? currentValue.toFixed(2)
        : Math.round(currentValue)}
      {typeof value === 'number' && value % 1 !== 0 ? ' TPD' : ''}
    </span>
  );
};

const StatisticsSection = () => {
  const statistics = [
    { label: "Village Panchayats", value: 191 },
    { label: "Municipal Councils", value: 13 },
    { label: "Daily Waste Generation", value: 226.87 },
    { label: "Waste Treatment", value: 197.47 },
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Waste Management in Numbers</h2>
          <p className="text-muted-foreground">Key statistics highlighting our impact across Goa</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
