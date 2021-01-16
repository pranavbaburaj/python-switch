"""
MIT License

Copyright (c) 2021 Pranav Baburaj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

"""

class Maps(object):
	def __init__(self, data_types):
		self.data = self.get_data_types(data_types)
		self.maps = {}

	def get_data_types(self, data):
		if isinstance(data, tuple):
			return data[0:2]
		else:
			raise TypeError("Data type parameter should be a tuple")

	def add(self, i, v):
		if isinstance(i, self.data[0]) and isinstance(v, self.data[1]):
			if i not in self.maps:
				self.maps[i] = v
		else:
			raise TypeError("Data type not matching")

	def get(self):
		return self.maps

	def length(self):
		return len(self.maps)

	def keys(self):
		key = []
		for k in self.maps:
			key.append(k)
		return key

	def delete(self, key):
		if key in self.maps:
			del self.maps[key]
		
		return None

	def filter(self, value):
		arr = []

		for v in self.maps:
			if self.maps[v] == value:
				arr.append(v)

		return arr

	def clear(self):
		self.maps = {}
		return self.maps

	def change(self, i, v):
		if i in self.maps:
			if isinstance(v, self.data[1]):
				self.maps[i] = v

