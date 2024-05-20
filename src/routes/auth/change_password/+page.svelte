<script>
  let password = '';
  let confirmPassword = '';
  let errorMessage = '';

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      errorMessage = "Passwords don't match";
      return;
    }

    // Handle password change submission (e.g., call an API endpoint)
    console.log('Password changed successfully');
    // Reset form fields
    password = '';
    confirmPassword = '';
    errorMessage = '';
  };
</script>

<style>
  .error {
    color: red;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>
  <br />

  <label>
    Confirm Password:
    <input type="password" bind:value={confirmPassword} />
  </label>
  <br />

  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}

  <button type="submit">Change Password</button>
</form>
