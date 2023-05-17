import PhoneApp from './PhoneApp/PhoneApp';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <PhoneApp initialContacts={PhoneApp.defaultProps.initialContacts} />
    </div>
  );
};