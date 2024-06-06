export const formState = {
  firstName: { name: 'firstName', value: '', error: '', type: 'text' },
  lastName: { name: 'lastName', value: '', error: '', type: 'text' },
  email: { name: 'email', value: '', error: '', type: 'email' },
  password: { name: 'password', value: '', error: '', type: 'password' },
};

export const loginFormState = {
  email: { name: 'email', value: '', error: '', type: 'email' },
  password: { name: 'password', value: '', error: '', type: 'password' },
};

export const initialCodeState = `
<style>
.welcome {
    color: #fff;
    padding: 1rem;
    background-color: #38B2AC;
  }
.lead-text {
 color: #A0AEC0;
}
</style>
<h1 class="welcome">Welcome to SeeSS</h1>
<p class="lead-text">Go ahead and start writing styles to create something amazing!</p>
`;
