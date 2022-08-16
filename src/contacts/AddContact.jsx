import { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
  firstName : yup.string().required('First name is required').min(3,'first name must be 3 character'),
  lastName : yup.string().required('Last name is required').min(3,'first name must be 3 character'),
  email : yup.string().required('First name is required').email('Must be a valid email'),
  profession: yup
      .string()
      .required('Profession is Required')
      .oneOf(['developer', 'designer', 'marketer'])
      .min(3, 'Profession must be 3 or more in length '),
    bio: yup
      .string()
      .required('Bio is Required')
      .min(10, 'Bio must be 10 or more in length ')
      .max(300, 'Bio must be equal or less thant 300 character'),
    image: yup
      .string()
      .required('profile Image URL is Required')
      .url('Must be a valid URL'),
    gender: yup
      .mixed()
      .required('Gender is required')
      .oneOf(['male', 'female']),
}).required()

export default function AddContact({ addContact }) {
    /*
    const [contact,setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        gender: 'male',
        dateOfBirth: '',
        bio: '',
        image:''
    });
    */
    const {register,handleSubmit,watch,setValue,reset,formState:{errors,isSubmitting,isSubmitSuccessful}}
    = useForm({
      resolver : yupResolver(schema),
    });

    console.log(errors);
    /*
    const handleChange = (evt) => {
        setContact({
        ...contact,
        [evt.target.name] : evt.target.value
        })
        console.log("handleChange",contact);
    }

    const handleForm = (evt) => {
        evt.preventDefault();
        addContact(contact);
        console.log("handleForm",contact);
    }
    */
    //const {firstName,lastName,email,profession,gender,dateOfBirth,bio,image} = contact;
    const [birthYear, setBirthYear] = useState(new Date());

    useEffect(() => {
      if(isSubmitSuccessful){
        reset({
          firstName: '',
          lastName: '',
          email: '',
          profession: '',
          bio: '',
          gender: 'male',
          image: '',
        })
      }
    },[isSubmitSuccessful]);

    useEffect(() => {
      setValue('dateOfBirth',birthYear)
    },[birthYear]
    );

    const onSubmit = (data) => {
        console.log(data)
    }
   return (
    <>
      <h2 className='text-center'>Add Contact</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className='mb-3'>
          <Col sm={3}>
            <Form.Label htmlFor='firstName' column>
              First Name
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type='text'
              id='firstName'
              defaultValue=''
              {...register('firstName')}
              isInvalid={errors?.firstName}
              placeholder='Enter Your First Name'
            />
            <Form-Control-Feedback type="invalid" className="d-block">
                {errors?.firstName?.message}
            </Form-Control-Feedback>
          </Col>
        </Form.Group>       
        <Form.Group as={Row} className='mb-3'>
          <Col sm={3}>
            <Form.Label htmlFor='lastName' column>
              Last Name
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type='text'
              id='lastName'
              name='lastName'
              defaultValue=''
              {...register('lastName')}
              isInvalid={errors?.lastName}
              placeholder='Enter Your Last Name'
            />
            <Form-Control-Feedback type="invalid" className="d-block">
                {errors?.lastName?.message}
            </Form-Control-Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col sm={3}>
            <Form.Label htmlFor='email' column>
              Email
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type='email'
              id='email'
              name='email'
              defaultValue=''
              {...register('email')}
              isInvalid={errors?.email}
              placeholder='Enter Your email'
            />
            <Form-Control-Feedback type="invalid" className="d-block">
                {errors?.email?.message}
            </Form-Control-Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col sm={3}>
            <Form.Label htmlFor='profession' column>
              Profession
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Select
              {...register('profession')}
              id='profession'
              //defaultValue={profession}
              isInvalid={errors?.profession}
              aria-label='Select your profession'
            >
              <option value='' disabled>
                Select your profession
              </option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='marketer'>Markerter</option>
            </Form.Select>

            <Form.Control.Feedback type='invalid' className='d-block'>
              {errors?.profession?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col sm={3}>
            <Form.Label htmlFor='image' column>
              Profile Picture
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type='text'
              id='image'
              name='image'
              defaultValue=''
              {...register('image')}
              isInvalid={errors?.image}
              placeholder='Enter Your image'
            />
            <Form-Control-Feedback type="invalid" className="d-block">
                {errors?.image?.message}
            </Form-Control-Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col sm={3}>
            <Form.Label htmlFor='dateOfBirth' column>
              Date of Birth
            </Form.Label>
          </Col>
          <Col sm={9}>
            <DatePicker
              selected={birthYear}
              name='dateOfBirth'
              id='dateOfBirth'
              placeholder='Enter your Date of Birth'
              maxDate={new Date()}
              showYearDropdown
              onChange={(date) => setBirthYear(date)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col sm={3}>
            <Form.Label htmlFor='gender' column>
              Gender{' '}
            </Form.Label>
          </Col>
          <Col xs='auto'>
            <Form.Check
              type='radio'
              label='Male'
              value='male'
              {...register('gender')}
            />
          </Col>
          <Col xs='auto'>
            <Form.Check
              type='radio'
              label='Female'
              value='female'
              {...register('gender')}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col sm={3}>
            <Form.Label htmlFor='bio' column>
              Bio
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              as='textarea'
              type='text'
              {...register('bio')}
              isInvalid={errors?.bio}
              placeholder='Enter Your Bio'
            />
            <Form.Control.Feedback type='invalid' className='d-block'>
              {errors?.bio?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Button
          variant='primary'
          size='md'
          type='submit'
        >
          Add Contact
        </Button>
      </Form>
    </>
  )
}
