import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

const customScannerStyles = {
  container: {
    width: '50%',
    height: '400px', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  video: {
    width: '100%',
    height: '100%',
  },
};

const App = () => {
  const [scannedResult, setScannedResult] = useState('');

  const handleScan = (result) => {
    if (result && result.length > 0) {
      setScannedResult(result[0].rawValue);
    } else {
      setScannedResult('');
    }
  };

  return (
    <div style={customScannerStyles.container}>
      <Scanner
        onScan={handleScan}
        styles={{
          video: customScannerStyles.video,
          container: customScannerStyles.container,
        }}
      />
      <p>{scannedResult}</p>
    </div>
  );
};

export default App;
