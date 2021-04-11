import * as React from 'react'
import {useState} from 'react'
import {FormControl, FormHelperText, InputLabel} from '@material-ui/core'
import {Autocomplete, AutocompleteItem} from 'mui-extension'

const cities = [
  'Los Angeles',
  'San Diego',
  'San Jose',
  'San Francisco',
  'Fresno',
  'Sacramento',
  'Long Beach',
  'Oakland',
  'Bakersfield',
  'Anaheim',
  'Santa Ana',
  'Riverside',
  'Stockton',
  'Chula Vista',
  'Fremont',
  'Irvine',
  'San Bernardino',
]

export const AutocompleteDemoMultiple = () => {
  const [value, setValue] = useState<string[]>([cities[1], cities[4]])
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>City</InputLabel>
        <Autocomplete multiple value={value} onChange={setValue} searchLabel="Search..." multiline rows="1" rowsMax="10">
          {cities.map(c => <AutocompleteItem key={c} value={c}>{c}</AutocompleteItem>)}
        </Autocomplete>
        <FormHelperText><b>JS value: </b>{JSON.stringify(value)}</FormHelperText>
      </FormControl>
    </div>
  )
}
