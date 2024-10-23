import React from 'react';
import './Contact.css';

const PlanCard = ({ title, price, features, recommended }) => {
  return (
    <div className={`plan-card ${recommended ? 'recommended' : ''}`}>
      <h3>{title}</h3>
      <p className="price">S/ {price} <span>x mes</span></p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index} className={feature.included ? '' : 'not-included'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button className="plan-button">Quiero este plan</button>
    </div>
  );
};

const PlanOptions = () => {
  const plans = [
    {
      title: 'Seven Fit Lite',
      price: 97,
      features: [
        { name: 'Cuestionario previo', included: true },
        { name: 'Sesión personal con el profesional', included: true },
        { name: 'Entrenamiento semanal personalizado', included: true },
        { name: 'Dieta mensual', included: true },
        { name: 'Seguimiento de la evolución', included: true },
        { name: 'Videollamada semanal de 1 hora para consultas y asesorías', included: false },
      ],
    },
    {
      title: 'Seven Fit Full',
      price: 157,
      features: [
        { name: 'Cuestionario previo', included: true },
        { name: 'Sesión personal con el profesional', included: true },
        { name: 'Entrenamiento semanal personalizado', included: true },
        { name: 'Dieta mensual', included: true },
        { name: 'Seguimiento de la evolución', included: true },
        { name: 'Videollamada semanal de 1 hora para consultas y asesorías', included: true },
      ],
      recommended: true,
    },
  ];

  return (
    <div className="plan-options">
      {plans.map((plan, index) => (
        <PlanCard 
          key={index} 
          title={plan.title} 
          price={plan.price} 
          features={plan.features}
          recommended={plan.recommended}
        />
      ))}
    </div>
  );
};

export default PlanOptions;
