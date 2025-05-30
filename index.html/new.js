function toggleBilling(type) {
            const buttons = document.querySelectorAll('.toggle-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            
            if (type === 'monthly') {
                buttons[0].classList.add('active');
                updatePricing('monthly');
            } else {
                buttons[1].classList.add('active');
                updatePricing('yearly');
            }
        }

        function updatePricing(type) {
            const prices = document.querySelectorAll('.card-price');
            const periods = document.querySelectorAll('.card-period');
            
            const monthlyPrices = ['$0', '$29', '$49', '$200', 'Talk to Sales'];
            const yearlyPrices = ['$0', '$290', '$490', '$2000', 'Talk to Sales'];
            
            prices.forEach((price, index) => {
                if (index < monthlyPrices.length) {
                    price.textContent = type === 'monthly' ? monthlyPrices[index] : yearlyPrices[index];
                }
            });
            
            periods.forEach((period, index) => {
                if (index < 4) {
                    period.textContent = type === 'monthly' ? '/month' : '/year';
                }
            });
        }

