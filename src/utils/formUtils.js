const validateForm = (formData) => {
  let errors = {};
  if (!formData.name.trim()) {
    errors.name = 'Введите имя';
  }
  if (!formData.tel.trim()) {
    errors.tel = 'Введите номер телефона';
  } else if (!/^7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(formData.tel)) {
    errors.tel = 'Пример: 7(777)777-77-77';
  }
  if (!formData.email.trim()) {
    errors.email = 'Введите электронную почту';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Не правильный формат электронной почты';
  }
  if (!formData.message.trim()) {
    errors.message = 'Введите текст';
  }
  return errors;
};

const submitForm = async (
  formData,
  formType,
  setFormSubmitted,
  setLoading,
  setFormData,
  onClose,
) => {
  if (validateForm(formData)) {
    setLoading(true);
    try {
      const response = await fetch('./php/form-telegram.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          formType,
        }).toString(),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: '',
            tel: '',
            email: '',
            message: '',
          });
          if (onClose) onClose();
        }, 2000);
      } else {
        console.error('Ошибка отправки данных');
      }
    } catch (error) {
      console.error('Ошибка:', error.message);
    } finally {
      setLoading(false);
    }
  } else {
    return validateForm(formData);
  }
};

const formatPhoneNumber = (value) => {
  let cleaned = value.replace(/\D/g, '');
  let formattedNumber = '';

  if (cleaned.length > 0) {
    formattedNumber += `${cleaned[0]}`;
  }
  if (cleaned.length > 1) {
    formattedNumber += `(${cleaned.slice(1, 4)}`;
  }
  if (cleaned.length > 4) {
    formattedNumber += `)${cleaned.slice(4, 7)}`;
  }
  if (cleaned.length > 7) {
    formattedNumber += `-${cleaned.slice(7, 9)}`;
  }
  if (cleaned.length > 9) {
    formattedNumber += `-${cleaned.slice(9, 11)}`;
  }
  return formattedNumber;
};

export const handleFocus = (e) => {
  const inputElement = e.target;
  if (inputElement.value === '') {
    inputElement.value = '7';
  }
};

export const handleBlur = (e) => {
  const inputElement = e.target;
  if (inputElement.value === '7') {
    inputElement.value = '';
  }
};

export const handleInputChange = (e, formData, setFormData) => {
  const { name, value } = e.target;
  if (name === 'tel') {
    const inputElement = e.target;
    const cursorPosition = inputElement.selectionStart;
    const isDeleting =
      e.nativeEvent.inputType === 'deleteContentBackward' ||
      e.nativeEvent.inputType === 'deleteContentForward';
    const formattedValue = formatPhoneNumber(value);

    setFormData({
      ...formData,
      [name]: formattedValue,
    });

    let newCursorPosition = cursorPosition;

    if (!isDeleting) {
      if (
        formattedValue[cursorPosition - 1] === '(' ||
        formattedValue[cursorPosition - 1] === ')'
      ) {
        newCursorPosition++;
      } else if (formattedValue[cursorPosition - 1] === '-') {
        newCursorPosition++;
      }
    } else {
      if (
        formattedValue[cursorPosition] === '(' ||
        formattedValue[cursorPosition] === ')'
      ) {
        newCursorPosition--;
      } else if (formattedValue[cursorPosition] === '-') {
        newCursorPosition--;
      }
    }

    setTimeout(() => {
      inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};

export const handleFormSubmit = async (
  e,
  formData,
  formType,
  setFormErrors,
  setFormSubmitted,
  setLoading,
  setFormData,
  onClose,
) => {
  e.preventDefault();
  const errors = validateForm(formData);
  setFormErrors(errors);

  if (Object.keys(errors).length === 0) {
    submitForm(
      formData,
      formType,
      setFormSubmitted,
      setLoading,
      setFormData,
      onClose,
    );
  }
};
