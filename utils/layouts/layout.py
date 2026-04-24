from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardButton, InlineKeyboardMarkup, ReplyKeyboardRemove

main_user_kb = ReplyKeyboardMarkup(
    keyboard = [ 
        [
            KeyboardButton(text='Приложение')
        ]
    ],
    resize_keyboard = True
)

main_admin_kb = ReplyKeyboardMarkup(
    keyboard = [ 
        [
            KeyboardButton(text='Приложение')
        ]
    ],
    resize_keyboard = True
)
