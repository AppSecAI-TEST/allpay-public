/**
 * Created by c0rp on 12/6/16.
 */

$(document).ready(function() {
    $('#cashin-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            pemInput: {
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите Приватный ключ(для подписи запроса)'
                    }
                }
            },
            certificateIdInput: {
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите номер сертификата'
                    }
                }
            },

            loginName: {
                validators: {
                    stringLength: {
                        min: 8,
                        message:'Длина логина должна быть больше 8 символов'
                    },
                    notEmpty: {
                        message: 'Пожалуйста, введите логин агента'
                    }
                }
            },
            toUser: {
                validators: {
                    stringLength: {
                        min: 16,
                        max: 16,
                        message:'Формат номера телефона неверный'
                    },
                    notEmpty: {
                        message: 'Пожалуйста, введите правильный номер телефона'
                    },
                }
            },

            amount: {
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите сумму'
                    }
                }
            }
        }
    })


        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#reg_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
