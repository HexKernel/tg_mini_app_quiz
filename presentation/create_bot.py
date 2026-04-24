import os
import logging
from dotenv import load_dotenv, find_dotenv
from aiogram import Bot, Dispatcher
from aiogram.enums import ParseMode
from aiogram.client.default import DefaultBotProperties
from aiogram.fsm.storage.memory import MemoryStorage

load_dotenv(find_dotenv())

admins = [int(admin) for admin in os.getenv('ADMINS').split(",")]

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

bot = Bot(token = os.getenv('TOKEN'), default = DefaultBotProperties(parse_mode = ParseMode.HTML))
dp = Dispatcher(storage = MemoryStorage())
print('start bot')
