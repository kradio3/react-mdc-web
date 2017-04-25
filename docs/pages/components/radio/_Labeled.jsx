import React, {PropTypes} from 'react'
import Radio from '../../../../src/Radio/Radio'
import FormField from '../../../../src/FormField/FormField'

class Labeled extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <FormField id="radio-titania">
          <Radio
            name="uranus"
            value="Titania"
          />
          <label>Titania</label>
        </FormField>
        <FormField id="radio-oberon">
          <Radio
            name="uranus"
            value="Oberon"
          />
          <label>Oberon</label>
        </FormField>
      </div>
    )
  }
}
export default Labeled;
