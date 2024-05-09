import clsx from 'clsx';
import './Alert.css';

// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 8,
//   backgroundColor: 'blue',
//   color: 'white',
// };

// const getBgColor = variant => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'success':
//       return 'green';
//     case 'error':
//       return 'red';
//     case 'warning':
//       return 'orange';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const className = ['alert', variant];

//   if (outlined) {
//     className.push('is-outlined');
//   }

//   if (elevated) {
//     className.push('is-elevated');
//   }

//   return <p className={className.join(' ')}>{children}</p>;
// };
export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        'alert',
        variant,
        outlined && 'is-outlined',
        elevated && 'is-elevated'
      )}
    >
      {children}
    </p>
  );
};
