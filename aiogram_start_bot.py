import asyncio
from presentation.create_bot import dp, bot
from utils.handlers.commands import user_router

async def main():
    dp.include_router(user_router)
    await dp.start_polling(bot)

if __name__ == '__main__':
    print('start running')
    asyncio.run(main())
    