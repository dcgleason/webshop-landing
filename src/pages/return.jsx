import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return (
      redirect('/')
    )
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! Your communmity invite has been sent to {customerEmail} along with separate confirmation email.

          If you have any questions, please email <a href="mailto:dan@beyondnow.services">dan@beyondnow.services</a>! 

          See you on the other side :)

          -Dan
          Founder of SN Go-Getters Premium (BeyondNow LLC) & Sr. SeviceNow Engineer
        </p>
      </section>
    )
  }

  return null;
}