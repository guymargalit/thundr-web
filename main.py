from kivy.app import App
from kivy.uix.button import Button


class ThundrApp(App):
    def build(self):
        return Button(text='Welcome to thundr')


if __name__ == '__main__':
    ThundrApp().run()
