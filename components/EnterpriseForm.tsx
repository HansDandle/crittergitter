'use client';

import React, { useState } from 'react';
import { FormField, SelectField, TextAreaField } from './FormFields';

interface EnterpriseFormProps {
  onSuccess?: (leadId: string) => void;
}

const facilityTypes = [
  { value: 'commercial', label: 'Commercial Building' },
  { value: 'industrial', label: 'Industrial Facility' },
  { value: 'food_service', label: 'Food Service / Restaurant' },
  { value: 'healthcare', label: 'Healthcare Facility' },
  { value: 'other', label: 'Other' },
];

const enterpriseIssues = [
  { value: 'rodent_exclusion', label: 'Rodent Prevention & Exclusion' },
  { value: 'bird_control', label: 'Bird Control & Deterrents' },
  { value: 'structural_assessment', label: 'Structural Vulnerability Assessment' },
  { value: 'perimeter_hardening', label: 'Perimeter Hardening' },
  { value: 'sanitation_consulting', label: 'Sanitation & Risk Assessment' },
  { value: 'compliance', label: 'Regulatory Compliance Support' },
];

const timelineOptions = [
  { value: 'immediate', label: 'Immediate (within 1 week)' },
  { value: 'urgent', label: 'Urgent (within 1-2 weeks)' },
  { value: 'standard', label: 'Standard (within 1 month)' },
  { value: 'planning', label: 'Planning Phase (1+ months)' },
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

export const EnterpriseForm: React.FC<EnterpriseFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactFirstName: '',
    contactLastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    facilityType: '',
    squareFootage: '',
    issues: [] as string[],
    projectScope: '',
    timeline: '',
    preferredContact: 'phone',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const toggleIssue = (issue: string) => {
    setFormData((prev) => ({
      ...prev,
      issues: prev.issues.includes(issue)
        ? prev.issues.filter((i) => i !== issue)
        : [...prev.issues, issue],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const submitData = {
      ...formData,
      squareFootage: formData.squareFootage ? parseInt(formData.squareFootage) : undefined,
    };

    try {
      const response = await fetch('/api/leads/enterprise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
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
          companyName: '',
          contactFirstName: '',
          contactLastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          facilityType: '',
          squareFootage: '',
          issues: [],
          projectScope: '',
          timeline: '',
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
    <form onSubmit={handleSubmit} className="enterprise-form">
      <h2>Request a Facility Assessment</h2>
      <p className="form-note">
        We coordinate comprehensive exclusion and prevention projects with licensed specialists.
        Our team will assess your facility and scope work with qualified partners in your region.
      </p>

      {message && <div className={`form-message ${errors._general ? 'error' : 'success'}`}>{message}</div>}

      <fieldset>
        <legend>Company Information</legend>

        <FormField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={(value) => handleChange('companyName', value)}
          error={errors.companyName}
          required
        />

        <div className="form-row">
          <FormField
            label="Contact First Name"
            name="contactFirstName"
            value={formData.contactFirstName}
            onChange={(value) => handleChange('contactFirstName', value)}
            error={errors.contactFirstName}
            required
          />
          <FormField
            label="Contact Last Name"
            name="contactLastName"
            value={formData.contactLastName}
            onChange={(value) => handleChange('contactLastName', value)}
            error={errors.contactLastName}
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
          label="Facility Address"
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
        <legend>Facility Details</legend>

        <SelectField
          label="Facility Type"
          name="facilityType"
          value={formData.facilityType}
          onChange={(value) => handleChange('facilityType', value)}
          options={facilityTypes}
          error={errors.facilityType}
          required
        />

        <FormField
          label="Approximate Square Footage (optional)"
          name="squareFootage"
          type="number"
          value={formData.squareFootage}
          onChange={(value) => handleChange('squareFootage', value)}
          error={errors.squareFootage}
        />
      </fieldset>

      <fieldset>
        <legend>Project Scope</legend>

        <div className="checkbox-group">
          <p>What services do you need? (Select all that apply)</p>
          {enterpriseIssues.map((issue) => (
            <label key={issue.value} className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.issues.includes(issue.value)}
                onChange={() => toggleIssue(issue.value)}
              />
              {issue.label}
            </label>
          ))}
          {errors.issues && <span className="error-message">{errors.issues}</span>}
        </div>

        <TextAreaField
          label="Project Scope & Goals"
          name="projectScope"
          value={formData.projectScope}
          onChange={(value) => handleChange('projectScope', value)}
          error={errors.projectScope}
          required
          placeholder="Describe your facility's challenges, current issues, and desired outcomes. What compliance or operational concerns do you have?"
          rows={6}
        />

        <SelectField
          label="Timeline"
          name="timeline"
          value={formData.timeline}
          onChange={(value) => handleChange('timeline', value)}
          options={timelineOptions}
          error={errors.timeline}
          required
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
        By submitting this form, you authorize our team to coordinate with licensed wildlife exclusion specialists
        in your area. Your facility information will be assessed and scoped confidentially.
      </p>
    </form>
  );
};
