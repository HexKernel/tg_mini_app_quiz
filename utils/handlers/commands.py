from aiogram.types import Message
from aiogram import Router, F, types
from aiogram.filters import CommandStart
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import State, StatesGroup

from utils.layouts.layout import main_admin_kb, main_user_kb
from presentation.create_bot import admins, bot

user_router = Router()

print('start command')

@user_router.message(CommandStart())
async def command_start(message: Message):
    if message.from_user.id in admins:
        await message.answer(f"Admin panel", reply_markup = main_admin_kb)
    else:
        await message.answer(f"Hi message text", reply_markup = main_user_kb)
