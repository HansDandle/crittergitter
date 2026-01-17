'use client';

import React, { useState } from 'react';
import { FormField, SelectField, TextAreaField } from './FormFields';

interface ResidentialFormProps {
  onSuccess?: (leadId: string) => void;
}

const issueTypes = [
  { value: 'squirrels', label: 'Squirrels' },
  { value: 'raccoons', label: 'Raccoons' },
  { value: 'rats', label: 'Rats' },
  { value: 'bats', label: 'Bats' },
  { value: 'other', label: 'Other' },
];

const severityOptions = [
  { value: 'minor', label: 'Minor (occasional sightings)' },
  { value: 'moderate', label: 'Moderate (frequent activity)' },
  { value: 'severe', label: 'Severe (active intrusion)' },
];

const contactMethods = [
  { value: 'phone', label: 'Phone' },
  { value: 'email', label: 'Email' },
];

const states = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

export const ResidentialForm: React.FC<ResidentialFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    issueType: '',
    issueDescription: '',
    issueSeverity: '',
    preferredContact: 'phone',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/leads/residential', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setMessage('Error submitting form. Please try again.');
        }
      } else {
        setMessage('Submitted - Thank you, a trusted professional will be in contact soon!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          issueType: '',
          issueDescription: '',
          issueSeverity: '',
          preferredContact: 'phone',
        });
        if (onSuccess) onSuccess(data.leadId);
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="residential-form">
      {message && <div className={`form-message ${errors._general ? 'error' : 'success'}`}>{message}</div>}

      <fieldset>
        <legend>Your Information</legend>
        <div className="form-row">
          <FormField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={(value) => handleChange('firstName', value)}
            error={errors.firstName}
            required
          />
          <FormField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={(value) => handleChange('lastName', value)}
            error={errors.lastName}
            required
          />
        </div>

        <div className="form-row">
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
            error={errors.email}
            required
          />
          <FormField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(value) => handleChange('phone', value)}
            error={errors.phone}
            required
          />
        </div>

        <FormField
          label="Street Address"
          name="address"
          value={formData.address}
          onChange={(value) => handleChange('address', value)}
          error={errors.address}
          required
        />

        <div className="form-row">
          <FormField
            label="City"
            name="city"
            value={formData.city}
            onChange={(value) => handleChange('city', value)}
            error={errors.city}
            required
          />
          <SelectField
            label="State"
            name="state"
            value={formData.state}
            onChange={(value) => handleChange('state', value)}
            options={states}
            error={errors.state}
            required
          />
          <FormField
            label="ZIP Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={(value) => handleChange('zipCode', value)}
            error={errors.zipCode}
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Wildlife Issue Details</legend>

        <SelectField
          label="What type of wildlife are you experiencing?"
          name="issueType"
          value={formData.issueType}
          onChange={(value) => handleChange('issueType', value)}
          options={issueTypes}
          error={errors.issueType}
          required
        />

        <SelectField
          label="How severe is the issue?"
          name="issueSeverity"
          value={formData.issueSeverity}
          onChange={(value) => handleChange('issueSeverity', value)}
          options={severityOptions}
          error={errors.issueSeverity}
          required
        />

        <TextAreaField
          label="Describe the issue in detail"
          name="issueDescription"
          value={formData.issueDescription}
          onChange={(value) => handleChange('issueDescription', value)}
          error={errors.issueDescription}
          required
          placeholder="When did you first notice the problem? Where have you seen activity?"
        />
      </fieldset>

      <fieldset>
        <legend>Preferred Contact Method</legend>
        <SelectField
          label="How would you like to be contacted?"
          name="preferredContact"
          value={formData.preferredContact}
          onChange={(value) => handleChange('preferredContact', value)}
          options={contactMethods}
          required
        />
      </fieldset>

      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? 'Submitting...' : 'Request Assessment'}
      </button>

      <p className="form-disclaimer">
        By submitting this form, you consent to be contacted by licensed wildlife specialists.
        Your information will not be shared beyond our partner network.
      </p>
    </form>
  );
};
