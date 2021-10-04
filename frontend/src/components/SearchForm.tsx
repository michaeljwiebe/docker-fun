import React, {FormEventHandler} from 'react';
import { Input, Card, CardContent } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  domain: string;
  handleSetDomain: (domain: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const SearchForm: React.FunctionComponent<Props> = ({ domain, handleSetDomain, onSubmit }) => {

  return (
    <Card>
      <CardContent style={styles.cardContent}>
        <form onSubmit={onSubmit}>
          <Input
            style={styles.input}
            inputProps={{'variant': "outlined"}}
            required={true}
            autoFocus={true}
            endAdornment={<SearchIcon />}
            value={domain}
            onChange={(event) => {
              handleSetDomain(event.target.value)
            }}
          />
        </form>
      </CardContent>
    </Card>
  )
}

export default SearchForm;

const styles = {
  input: {
    margin: 10
  },
  cardContent: {
    padding: 20
  }
}