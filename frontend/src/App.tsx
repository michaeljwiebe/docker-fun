import React, {useState} from 'react';
import './App.css';
import SearchForm from "./components/SearchForm";
import { whoisRecord, error } from "./types/types";
import Result from './components/Result';
import axios from 'axios';
import {CircularProgress, Paper} from "@material-ui/core";


const App: React.FunctionComponent = () => {
  const [ domain, setDomain ] = useState<string>('');
  const [ result, setResult ] = useState<whoisRecord | undefined>(undefined);
  const [ err, setErr ] = useState<error>();
  const [ isCalled, setIsCalled ] = useState<boolean>(false);
  const domainValidator = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;
  const isDomainValid = () => domain.match(domainValidator);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    if (isDomainValid()) {
      setIsCalled(true);
      axios.get(`http://localhost:8080/?domain=${domain}`)
        .then(({data}) => {
          setResult(data);
        })
        .catch((err: error) => {
          setErr(err)
        })
    }
  }

  const handleSetDomain = (domain: string) => {
    setDomain(domain);
    setResult(undefined);
    setIsCalled(false);
  }

  return (
    <div className="App" style={styles.app}>
      <Paper>
        <SearchForm
          domain={domain}
          handleSetDomain={handleSetDomain}
          onSubmit={onSubmit}
        />

        {isDomainValid() && !isCalled ?
          <div style={styles.instructions}>Press enter to search</div>
          :
          !result && !isCalled ?
            <div style={styles.instructions}>Please enter a valid domain</div>
            :
            null
        }
        {result ?
          <Result result={result} error={err}/>
          :
          null
        }
        {isCalled && !result ?
          <CircularProgress />
          :
          null
        }
      </Paper>
    </div>
  );
}

export default App;

const styles = {
  app: {
    padding: 50,
    backgroundColor: 'grey',
    height: '100vh'
  },
  instructions: {
    padding: 20
  }
}